import { Adapter } from "@sveltejs/kit";
import type { WebSocketServer } from "ws";
import "./ambient.js";

declare global {
  const ENV_PREFIX: string;
}

interface AdapterOptions {
  out?: string;
  precompress?: boolean;
  envPrefix?: string;
  polyfill?: boolean;
}

export default function plugin(options?: AdapterOptions): Adapter;

export type HandleWs = (wss: WebSocketServer) => void;
