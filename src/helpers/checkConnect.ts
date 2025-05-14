'use strict'
import mongoose from 'mongoose'
import os from 'os'
import process from 'process'

const countConnections = () => {
  const numConnections = mongoose.Connection.length

  console.log(`Number of connections: ${numConnections}`)
}

const checkOverLoad = () => {
  const numConnections = mongoose.Connection.length
  const numCores = os.cpus().length
  const memoryUsage = process.memoryUsage().rss

  const maxConnections = numCores * 7

  console.log(`Active connection: ${numConnections}`)
  console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)

  if (numConnections > maxConnections) {
    console.log(`Connections overload detected`)
  }
}

export { countConnections, checkOverLoad }
