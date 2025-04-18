"use client";

import { useEffect } from "react";
import { getAnalytics } from "firebase/analytics";
import firebase_app from "../firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Initialize analytics only on the client side
    if (typeof window !== 'undefined') {
      const analytics = getAnalytics(firebase_app);
      // You can add any additional analytics setup here
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}