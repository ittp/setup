const { os, platform, version, arch, networkInterfaces } = os

const { exec, spawn } = require('child_process')
const os = require('os')
const axios = require('axios')
const shell = require('shelljs')

const cmd = (ctx) => {
  // fetch("") 
  console.log(ctx)
  return { request: ctx }
}

const bash = () => {}

const wsl = () => {

}

