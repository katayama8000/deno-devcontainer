import { createUserId, UserId } from "./userIdVO_branded.ts";
import { assertEquals, assertThrows } from "jsr:@std/assert";

Deno.test("createUserId: 正常系", () => {
  const id: UserId = createUserId("user_abc123");
  assertEquals(typeof id, "string");
  assertEquals(id, "user_abc123");
});

Deno.test("createUserId: 異常系", () => {
  assertThrows(() => createUserId("invalid"), Error, "Invalid user id");
});

// 使い方例
const userId: UserId = createUserId("user_test001");
console.log("UserId:", userId);

// 型安全性の例（stringとは互換性がない）
// const s: string = userId; // OK
// const u: UserId = "user_test001"; // エラー

// --- UserIdクラス用テスト ---
import { UserId as UserIdClass } from "./userIdVO.ts";

Deno.test("UserId(class): 正常系", () => {
  const id = new UserIdClass("user_abc123");
  assertEquals(id.toString(), "user_abc123");
});

Deno.test("UserId(class): 異常系", () => {
  assertThrows(() => new UserIdClass("invalid"), Error, "Invalid user id");
});

Deno.test("UserId(class): equals", () => {
  const id1 = new UserIdClass("user_abc123");
  const id2 = new UserIdClass("user_abc123");
  const id3 = new UserIdClass("user_xyz");
  assertEquals(id1.equals(id2), true);
  assertEquals(id1.equals(id3), false);
});
