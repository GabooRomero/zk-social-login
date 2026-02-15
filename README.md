# ZK Identity - Privacy-First Social Login

## Overview

This project is a high-fidelity prototype demonstrating a **Zero-Knowledge (ZK) Social Login** flow. It addresses the friction of seed phrases in Web3 onboarding by allowing users to log in with existing social accounts (Google, Twitter, etc.) while preserving full privacy and non-custodial control.

The core innovation showcased here is the user experience of transforming "Web2 Identity" (JWT) into "Web3 Privacy" (ZK Proof) seamlessly.

## Key Features

*   **Seamless Onboarding**: Login with familiar social providers.
*   **Zero-Knowledge Privacy**: Visual demonstration of how personal data is converted into cryptographic proofs without leaving the client.
*   **Non-Custodial**: Users own their keys; no central server holds their private data.
*   **Dashboard**: A simulated protected environment showing the verified identity and wallet status.

## Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Styling**: Tailwind CSS v4 (Alpha/Compatible)
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Language**: TypeScript

## Getting Started

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

*   `src/app`: Next.js App Router pages (`/`, `/login`, `/dashboard`).
*   `src/components/ui`: Reusable UI components (Buttons, Cards, Inputs).
*   `src/components/auth`: Authentication-related components, including the ZK Proof generation animation.
*   `src/components/home`: Landing page sections.
*   `src/components/dashboard`: Dashboard widgets.

## Privacy Note

This is a **frontend-only prototype**. All "sensitive data" displayed (JWTs, keys) are simulated for demonstration purposes. In a production environment, the ZK proof generation would happen in a WASM worker, ensuring no private data ever leaves the user's device.
