import { pgTable, serial, text, integer, real, timestamp } from 'drizzle-orm/pg-core';

// NBA Teams
export const teams = pgTable('teams', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  abbreviation: text('abbreviation').notNull().unique(),
  city: text('city').notNull(),
  conference: text('conference').notNull(), // 'East' | 'West'
  division: text('division').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// NBA Players
export const players = pgTable('players', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  teamId: integer('team_id').references(() => teams.id),
  position: text('position'),
  jerseyNumber: integer('jersey_number'),
  createdAt: timestamp('created_at').defaultNow(),
});

// NBA Games
export const games = pgTable('games', {
  id: serial('id').primaryKey(),
  homeTeamId: integer('home_team_id').references(() => teams.id).notNull(),
  awayTeamId: integer('away_team_id').references(() => teams.id).notNull(),
  homeScore: integer('home_score'),
  awayScore: integer('away_score'),
  status: text('status').notNull().default('scheduled'), // 'scheduled' | 'live' | 'final'
  scheduledAt: timestamp('scheduled_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Player Game Stats
export const playerStats = pgTable('player_stats', {
  id: serial('id').primaryKey(),
  playerId: integer('player_id').references(() => players.id).notNull(),
  gameId: integer('game_id').references(() => games.id).notNull(),
  points: integer('points').default(0),
  rebounds: integer('rebounds').default(0),
  assists: integer('assists').default(0),
  steals: integer('steals').default(0),
  blocks: integer('blocks').default(0),
  minutes: real('minutes').default(0),
});
