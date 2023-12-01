#!/usr/bin/env node
import { greetingGames, greetingPlayer, getPlayerName } from '../src/cli.js';

greetingGames();
const playerName = getPlayerName();
greetingPlayer(playerName);
