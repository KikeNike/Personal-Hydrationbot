const NotificationCenter = require("node-notifier").NotificationCenter;
const sched = require("node-schedule");

var notifier = new NotificationCenter({
    withFallback: false,
    customPath: undefined
});

var waterTime = sched.scheduleJob('0 0 */1 * * *', () => {
    notifier.notify({
        title: 'DRINK SOME WATER YA\' TWAT',
        message: 'This message was made by your Hydrationbot',
        sound: 'Hero',
        wait: true
      });
})