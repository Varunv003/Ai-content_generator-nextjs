import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formdata').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
})