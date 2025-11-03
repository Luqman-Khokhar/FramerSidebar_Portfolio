import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProductionModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed  flex items-start justify-center z-50" // fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-[50%] sm:w-[300px] p-6 text-center border border-gray-200"
          >
            {/* Close Icon */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              🚧 Site in Production
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              This portfolio website is currently under production. Some
              sections or animations may be incomplete.
            </p>

            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Okay, Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductionModal;
