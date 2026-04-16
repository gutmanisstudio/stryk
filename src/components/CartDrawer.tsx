"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PillIcon from "./PillIcon";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, totalPrice, updateQty, removeFromCart, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} x${i.qty} — €${i.product.price * i.qty}`
    );
    const msg = `Hi, I'd like to order:\n${lines.join("\n")}\n\nTotal: €${totalPrice}`;
    window.open(
      `https://wa.me/27717545?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-neutral-950 border-l border-neutral-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <PillIcon label="✕" onClick={onClose} />
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-neutral-500 text-sm mt-8 text-center">
                  Your cart is empty.
                </p>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.product.slug}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4 rounded-xl bg-neutral-900 p-3"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-800">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-white">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-neutral-500">
                          €{item.product.price} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <PillIcon
                          label="−"
                          onClick={() =>
                            updateQty(item.product.slug, item.qty - 1)
                          }
                        />
                        <span className="min-w-[1.5rem] text-center text-sm text-white">
                          {item.qty}
                        </span>
                        <PillIcon
                          label="+"
                          onClick={() =>
                            updateQty(item.product.slug, item.qty + 1)
                          }
                        />
                        <button
                          onClick={() => removeFromCart(item.product.slug)}
                          className="ml-auto text-xs text-neutral-600 hover:text-red-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-neutral-800 px-6 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Total</span>
                  <span className="text-lg font-bold">€{totalPrice}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full rounded-full bg-green-600 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500"
                >
                  Checkout via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-neutral-600 hover:text-white transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
