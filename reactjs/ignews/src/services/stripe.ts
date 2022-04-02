import Stripe from "stripe";
import { version } from "../../package.json";

export const strupe = new Stripe(
  process.env.STRIPE_API_KEY, 
  {
    apiVersion: null,
    appInfo: {
      name: 'Ignews',
      version
    }
  }
);