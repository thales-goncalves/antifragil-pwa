import React, { useEffect, useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface LogoutConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutConfirmation: React.FC<LogoutConfirmationProps> = ({
  isOpen,
  onClose,
  onLogout,
}) => {
  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, countdown]);

  useEffect(() => {
    if (isOpen) {
      setCountdown(3);
    }
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="bottom">
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 rounded-t-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: 50 }}
      >
        <h2 className="text-xl font-semibold text-red-500 mb-2">
          Are you sure you want to Logout?
        </h2>
        <p className="text-gray-400 mb-6">
          You are about to logout in {countdown} seconds. Do you want to continue?
        </p>
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="flex-1 mr-2 border-red-500 text-red-500"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 ml-2 bg-red-500 hover:bg-red-600 text-white"
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default LogoutConfirmation;
