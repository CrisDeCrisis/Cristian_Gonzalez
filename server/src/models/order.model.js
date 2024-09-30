import crypto from "crypto";

const ordersCollection = [];

// Crear una orden
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};

export const getOrders = (userId) => {
  return ordersCollection.filter((order) => order.userId === userId);
};

// Obtener una orden por ID
export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find(
      (order) => order.id === id && order.userId === userId
    ) || null
  );
};

// Eliminar una orden por ID
export const deleteOrderById = (id, userId) => {
  const orderIndex = ordersCollection.findIndex(
    (order) => order.id === id && order.userId === userId
  );

  if (orderIndex === -1) {
    return null;
  }

  const [deletedOrder] = ordersCollection.splice(orderIndex, 1);
  return deletedOrder;
};