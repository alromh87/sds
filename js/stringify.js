// koffee 0.56.0

/*
 0000000  000000000  00000000   000  000   000   0000000   000  00000000  000   000
000          000     000   000  000  0000  000  000        000  000        000 000 
0000000      000     0000000    000  000 0 000  000  0000  000  000000      00000  
     000     000     000   000  000  000  0000  000   000  000  000          000   
0000000      000     000   000  000  000   000   0000000   000  000          000
 */
var stringify,
    indexOf = [].indexOf;

stringify = function(data, options) {
    var opt, ref;
    if (options == null) {
        options = {};
    }
    opt = Object.assign({}, options);
    if (opt.ext != null) {
        opt.ext;
    } else {
        opt.ext = '.noon';
    }
    if (opt.indent != null) {
        opt.indent;
    } else {
        opt.indent = '    ';
    }
    if (ref = opt.ext, indexOf.call(noon.extnames, ref) >= 0) {
        return require('noon').stringify(data, opt);
    }
};

module.exports = stringify;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzIjpbIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0FBQUEsSUFBQSxTQUFBO0lBQUE7O0FBUUEsU0FBQSxHQUFZLFNBQUMsSUFBRCxFQUFPLE9BQVA7QUFFUixRQUFBOztRQUZlLFVBQVE7O0lBRXZCLEdBQUEsR0FBTSxNQUFNLENBQUMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsT0FBbEI7O1FBQ04sR0FBRyxDQUFDOztRQUFKLEdBQUcsQ0FBQyxNQUFPOzs7UUFDWCxHQUFHLENBQUM7O1FBQUosR0FBRyxDQUFDLFNBQVU7O0lBQ2QsVUFBRyxHQUFHLENBQUMsR0FBSixFQUFBLGFBQVcsSUFBSSxDQUFDLFFBQWhCLEVBQUEsR0FBQSxNQUFIO2VBQ0ksT0FBQSxDQUFRLE1BQVIsQ0FBZSxDQUFDLFNBQWhCLENBQTBCLElBQTFCLEVBQWdDLEdBQWhDLEVBREo7O0FBTFE7O0FBUVosTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbiAwMDAwMDAwICAwMDAwMDAwMDAgIDAwMDAwMDAwICAgMDAwICAwMDAgICAwMDAgICAwMDAwMDAwICAgMDAwICAwMDAwMDAwMCAgMDAwICAgMDAwXG4wMDAgICAgICAgICAgMDAwICAgICAwMDAgICAwMDAgIDAwMCAgMDAwMCAgMDAwICAwMDAgICAgICAgIDAwMCAgMDAwICAgICAgICAwMDAgMDAwIFxuMDAwMDAwMCAgICAgIDAwMCAgICAgMDAwMDAwMCAgICAwMDAgIDAwMCAwIDAwMCAgMDAwICAwMDAwICAwMDAgIDAwMDAwMCAgICAgIDAwMDAwICBcbiAgICAgMDAwICAgICAwMDAgICAgIDAwMCAgIDAwMCAgMDAwICAwMDAgIDAwMDAgIDAwMCAgIDAwMCAgMDAwICAwMDAgICAgICAgICAgMDAwICAgXG4wMDAwMDAwICAgICAgMDAwICAgICAwMDAgICAwMDAgIDAwMCAgMDAwICAgMDAwICAgMDAwMDAwMCAgIDAwMCAgMDAwICAgICAgICAgIDAwMCAgIFxuIyMjXG5cbnN0cmluZ2lmeSA9IChkYXRhLCBvcHRpb25zPXt9KSAtPlxuICAgIFxuICAgIG9wdCA9IE9iamVjdC5hc3NpZ24ge30sIG9wdGlvbnNcbiAgICBvcHQuZXh0ID89ICcubm9vbidcbiAgICBvcHQuaW5kZW50ID89ICcgICAgJ1xuICAgIGlmIG9wdC5leHQgaW4gbm9vbi5leHRuYW1lc1xuICAgICAgICByZXF1aXJlKCdub29uJykuc3RyaW5naWZ5IGRhdGEsIG9wdFxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuIl19
//# sourceURL=../coffee/stringify.coffee