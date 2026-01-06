import Stripe from "stripe";
import { NextResponse } from "next/server";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
} as any);


export async function POST() {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: "DEMO" },
                    unit_amount: 1000,
                },
                quantity: 1,

            },

        ],
        success_url: "https://nextjs-stripe-checkout-tawny.vercel.app/success",
        cancel_url: "https://nextjs-stripe-checkout-tawny.vercel.app/cancel",
    });

    return NextResponse.json({ url: session.url })
}