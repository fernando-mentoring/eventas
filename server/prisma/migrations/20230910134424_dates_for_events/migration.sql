/*
  Warnings:

  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" TEXT NOT NULL DEFAULT 'Today',
    "endDate" TEXT,
    "startHour" TEXT NOT NULL DEFAULT '12:00',
    "endHour" TEXT,
    "content" TEXT,
    "eventOwnerId" TEXT NOT NULL,
    CONSTRAINT "Event_eventOwnerId_fkey" FOREIGN KEY ("eventOwnerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("content", "eventOwnerId", "id", "location", "title") SELECT "content", "eventOwnerId", "id", "location", "title" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
