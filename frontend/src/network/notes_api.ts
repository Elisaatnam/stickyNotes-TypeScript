import { Interface } from "readline";
import { Note } from "../models/note";

async function fetchData(input: RequestInfo, init?: RequestInit) {
	const response = await fetch(input, init);
	if (response.ok) {
		return response;
	} else {
		const errorBody = await response.json();
		const errorMsg = errorBody.error;
		throw Error(errorMsg);
	}
}

export async function fetchNotes(): Promise<Note[]> {
	const response = await fetchData("/api/notes", { method: "GET" });
	return response.json();
}

export interface NoteInput {
	title: string;
	text?: string;
}

export async function createNote(note: NoteInput): Promise<Note[]> {
	const response = await fetchData("/api/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(note),
	});
	return response.json();
}