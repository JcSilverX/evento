import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};

export const sleep = async (ms?: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getData = async <T>(url: string): Promise<T> => {
	const response = await fetch(String(url));
	const data: T = await response.json();

	return data;
};
