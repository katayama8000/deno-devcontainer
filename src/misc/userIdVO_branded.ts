export type UserId = string & { readonly brand: unique symbol };

export function createUserId(value: string): UserId {
  if (!/^user_[a-zA-Z0-9]+$/.test(value)) {
    throw new Error("Invalid user id");
  }
  return value as UserId;
}
