import app from './app';

const server = app.listen(app.get('port'), () => {
    console.info('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.info('Press CTRL-C to stop');
});

export default server;
