import { writable } from "svelte/store";

export const weather = writable(undefined);

export const coords = writable({ lat: undefined, lon: undefined });