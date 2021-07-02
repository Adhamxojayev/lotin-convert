var elOpenList = document.querySelector('.sitenav');
var elOpenToglle = document.querySelector('.js-toggler__button');

elOpenToglle.addEventListener('click', function() {
  elOpenList.classList.toggle('sitenav--active')
})
const objlotin = {
  ' ': ' ',
  'a': 'а', 'A': 'А',
  'b': 'б', 'B': 'Б',
  'd': 'д', 'D': 'Д',
  'e': 'е', 'E': 'Е',
  'f': 'ф', 'F': 'Ф',
  'g': 'г', 'G': 'Г',
  'h': 'ҳ', 'H': 'Ҳ',
  'i': 'и', 'I': 'И',
  'j': 'ж', 'J': 'Ж',
  'k': 'к', 'K': 'К',
  'l': 'л', 'L': 'Л',
  'm': 'м', 'M': 'М',
  'n': 'н', 'N': 'Н',
  'o': 'о', 'O': 'О',
  'p': 'п', 'P': 'П',
  'q': 'қ', 'Q': 'Қ',
  'r': 'р', 'R': 'Р',
  's': 'с', 'S': 'С',
  't': 'т', 'T': 'Т',
  'u': 'у', 'U': 'У',
  'v': 'в', 'V': 'В',
  'x': 'х', 'X': 'Х',
  'y': 'й', 'Y': 'Й',
  'z': 'з', 'Z': 'З',
  'sh':'ш', 'Sh': 'Ш','SH': 'Ш',
  'ch':'ч', 'Ch': 'Ч','CH': 'Ч',
  'g`': 'ғ', 'G`':'Ғ',
  "g'": 'ғ', "G'":'Ғ',
  "gʻ": 'ғ', "Gʻ":'Ғ',
  'o`': 'ў', 'O`': 'Ў',
  'o`': 'ў', 'O`': 'Ў',
  'oʻ': 'ў', 'Oʻ': 'Ў',
  "o'": 'ў', "O'": 'Ў',
  'ya': 'я','Ya' :'Я','YA':'Я',
  'yo': 'ё', 'Yo': 'Ё','YO':'Ё',
  'yu': 'ю', 'Yu':'Ю','YU':'Ю',
  'ts': 'ц', 'Ts': 'Ц','TS': 'Ц',
  'ʼ': 'ъ',
}

const objkril = {
  ' ': ' ',
  'а': 'a', 'А': 'A',
  'б': 'b', 'Б': 'B',
  'в': 'v', 'В': 'V',
  'г': 'g', 'Г': 'G',
  'д': 'd', 'Д': 'D',
  'е': 'e', 'Е': 'E',
  'ё': 'yo', 'Ё': 'Yo',
  'ж': 'j', 'Ж': 'J',
  'з': 'z', 'З': 'Z',
  'и': 'i', 'И': 'I',
  'й': 'y', 'Й': 'Y',
  'к': 'k', 'К': 'K',
  'л': 'l', 'Л': 'L',
  'м': 'm', 'М': 'M',
  'н': 'n', 'Н': 'N',
  'о': 'o', 'О': 'O',
  'п': 'p', 'П': 'P',
  'р': 'r', 'Р': 'R',
  'с': 's', 'С': 'S',
  'т': 't', 'Т': 'T',
  'у': 'u', 'У': 'U',
  'ф': 'f', 'Ф': 'F',
  'х': 'x', 'Х': 'X',
  'ц': 's', 'Ц': 'S',
  'ч': 'ch', 'Ч': 'Ch',
  'ш': 'sh', 'Ш': 'Sh',
  'ъ': 'ʼ', 'Ъ': 'ʼ',
  'ь': '', 'Ь': '',
  'э': 'e', 'Э': 'E',
  'ю': 'yu', 'Ю': 'Yu',
  'я': 'ya', 'Я': 'Ya',
  'ў': 'oʻ', 'Ў': 'Oʻ',
  'қ': 'q', 'Қ': 'Q',
  'ғ': 'gʻ', 'Ғ': 'Gʻ',
  'ҳ': 'h', 'Ҳ': 'H',
}

function lotin(){
  let str = ''
  let text = text1.value
  for(let i = 0; i < text.length; i++){
      let temp = text[i] + text[i+1]
      if(objlotin[temp]){
          str += objlotin[temp]
          i++
      }else if(!objlotin[text[i]]){
          str += text[i]
      }
      else{
          str += objlotin[text[i]]
      }
    
  }
  text2.value = str
}
btnkril.onclick = lotin
btnclear.onclick = () => {
  text2.value = ''
  text1.value = ''
}

function kril(){
  let str = ''
  for(let key of text2.value){
      str += objkril[key]
  }
  text1.value = str
}
// btnlotin.onclick = kril