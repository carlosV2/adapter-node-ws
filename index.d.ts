import { Adapter } from "@sveltejs/kit";
import { Server } from "socket.io";
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

export type HandleWs = (wss: Server) => void;
