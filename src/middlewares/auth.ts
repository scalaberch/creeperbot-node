import { HttpNext, HttpRequest, HttpResponse } from '@server/modules/http/defines';

export const isAdmin = async (request: HttpRequest, response: HttpResponse, next: HttpNext) => {
  next();
};

export const isHost = async (request: HttpRequest, response: HttpResponse, next: HttpNext) => {
  next();
};

export const isController = async (request: HttpRequest, response: HttpResponse, next: HttpNext) => {
  next();
};
