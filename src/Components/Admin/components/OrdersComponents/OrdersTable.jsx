import React from "react";

const statusStyles = {
  processing: "bg-blue-100 text-blue-600",
  pending: "bg-orange-100 text-orange-600",
  completed: "bg-green-100 text-green-600",
  delivered: "bg-green-100 text-green-600",
  cancelled: "bg-red-100 text-red-600",
};

const paymentStyles = {
  paid: "bg-green-100 text-green-600",
  pending: "bg-orange-100 text-orange-600",
  failed: "bg-red-100 text-red-600",
};

export default function OrdersTable({ orders }) {
  return (
    <div className="mt-4 border border-[#E7E4E4] rounded-lg overflow-hidden bg-white">
      <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr_1fr_1fr_1fr_2fr] px-5 py-4 text-[#7A7A7A] text-sm font-medium bg-[#FFF9F9]">
        <p>Order ID</p>
        <p>Customer</p>
        <p>Date</p>
        <p>Status</p>
        <p>Payment</p>
        <p>Total Amount</p>
        <p>Actions</p>
      </div>

      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order._id}
            className="grid grid-cols-[1.2fr_1.5fr_1.5fr_1fr_1fr_1fr_2fr] px-5 py-4 items-center border-t border-[#E7E4E4] text-sm"
          >
            <p className="font-medium truncate">
              {order.orderNumber || "—"}
            </p>

            <p className="truncate">
              {order.customer
                ? `${order.customer.firstName || ""} ${order.customer.lastName || ""}`
                : "—"}
            </p>

            <p className="text-[#605F5F] truncate">
              {order.createdAt
                ? new Date(order.createdAt).toLocaleString("en-NG", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "—"}
            </p>

            <span
              className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
                statusStyles[order.orderStatus] ||
                "bg-gray-100 text-gray-600"
              }`}
            >
              {order.orderStatus
                ? order.orderStatus.charAt(0).toUpperCase() +
                  order.orderStatus.slice(1)
                : "—"}
            </span>

            <span
              className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
                paymentStyles[order.paymentStatus] ||
                "bg-gray-100 text-gray-600"
              }`}
            >
              {order.paymentStatus
                ? order.paymentStatus.charAt(0).toUpperCase() +
                  order.paymentStatus.slice(1)
                : "—"}
            </span>

            <p className="font-medium truncate">
              {order.totalAmount !== undefined
                ? `₦${order.totalAmount.toLocaleString()}`
                : "₦0"}
            </p>

            <div className="flex gap-4 text-sm font-medium whitespace-nowrap">
              <button className="text-[#6C4CF1] hover:underline">
                View
              </button>
              <button className="text-[#059D28] hover:underline">
                Update
              </button>
              <button className="text-[#E60E0E] hover:underline">
                Cancel
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="px-5 py-4 text-gray-500">No orders found</p>
      )}
    </div>
  );
}
