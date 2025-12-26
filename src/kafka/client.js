const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "user-service",
  brokers: process.env.KAFKA_BROKERS.split(",")
});

module.exports = kafka;
