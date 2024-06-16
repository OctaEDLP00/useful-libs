import {
	$addEL,
	$append,
	$byName,
	$byTagName,
	$class,
	$className,
	$create,
	$id,
	$query,
	$remove,
	$queryAll,
	$removeEL,
	Dom as DomClass
} from './dom'
import {
	timeLog,
	assert,
	clear,
	count,
	countReset,
	debug,
	dir,
	end,
	error,
	group,
	groupCollapsed,
	groupEnd,
	info,
	log,
	start,
	table,
	trace
} from './logs'
import * as Proto from './proto'
import { isFalsy } from './falsify'
import * as Dom from './dom'
import * as Logs from './logs'
import * as Falsify from './falsify'


export {
	$addEL,
	$append,
	$byName,
	$byTagName,
	$class,
	$className,
	$create,
	$id,
	$query,
	$remove,
	$queryAll,
	$removeEL,
	DomClass,
	Dom,
	isFalsy,
	Falsify,
	Logs,
	clear,
	count,
	countReset,
	debug,
	dir,
	end,
	error,
	group,
	groupCollapsed,
	groupEnd,
	info,
	log,
	start,
	table,
	trace,
	timeLog,
	assert,
	Proto
}
