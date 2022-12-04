console.log('p21')
let x = $prefs.valueForKey('a11')
if (!x) {
    x = 'default'
}
$notify('主标题p23', '副标题2', 'p1.a2:' + x)
console.log('p22')