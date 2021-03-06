###
 0000000   00000000  000000000
000        000          000
000  0000  0000000      000
000   000  000          000
 0000000   00000000     000
###

# accepts an object and a keypath as a list or string and a value
# returns the value at keypath or undefined

get = (object, keypath, defaultValue) ->

    return if not object
    return if not keypath?.length

    keypath = keypath.split '.' if typeof(keypath) == 'string'

    kp = [].concat keypath

    while kp.length
        object = object[kp.shift()]
        return defaultValue if not object?

    object

module.exports = get
