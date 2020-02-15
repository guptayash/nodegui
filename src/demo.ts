import { QMainWindow, QPushButton, QApplication } from './index';
import './lib/core/bootstrap';
setInterval(() => {
    console.log('HEARBEAT');
}, 1000);

const win = new QMainWindow();
const btn = new QPushButton();
btn.setText('Quit');
btn.addEventListener('clicked', () => {
    win.close();
    QApplication.instance().quit();
});
win.setCentralWidget(btn);
win.show();
(global as any).win = win;

const activateUvLoop = (process as any).activateUvLoop;
activateUvLoop();
setTimeout(() => console.log('CONSOLE'), 1000);
