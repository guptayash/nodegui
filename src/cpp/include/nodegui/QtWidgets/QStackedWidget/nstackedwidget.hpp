#pragma once
#include <QStackedWidget>

#include "Extras/Utils/nutils.h"
#include "QtWidgets/QWidget/qwidget_macro.h"
#include "core/NodeWidget/nodewidget.h"
#include "napi.h"

class DLL_EXPORT NStackedWidget : public QStackedWidget, public NodeWidget {
  Q_OBJECT
  NODEWIDGET_IMPLEMENTATIONS(QStackedWidget)
 public:
  using QStackedWidget::QStackedWidget;  // inherit all constructors of
                                         // QStackedWidget

  void connectSignalsToEventEmitter() {
    QWIDGET_SIGNALS
    // Qt Connects: Implement all signal connects here
    QObject::connect(this, &QStackedWidget::currentChanged, [=](int index) {
      Napi::Env env = this->emitOnNode.Env();
      Napi::HandleScope scope(env);
      this->emitOnNode.Call({Napi::String::New(env, "currentChanged"),
                             Napi::Value::From(env, index)});
    });
  }
};
