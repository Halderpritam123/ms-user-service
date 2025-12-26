const kafka = require("./client");

const consumer = kafka.consumer({
  groupId: "user-service-group"
});

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "order-created",
    fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value.toString());

      console.log("📦 Order received in User Service:", order);

      // 🔁 Update local state here
      // Example: save order summary for user
    }
  });
};

module.exports = startConsumer;
