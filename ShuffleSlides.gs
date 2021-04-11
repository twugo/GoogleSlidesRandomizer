function ShuffleSlides() {
  // Get the current presentation to which this script is bound.
  // let presentation = SlidesApp.getActivePresentation();

  // グーグルスライドのURL。
  let url = '';

  let presentation = SlidesApp.openByUrl(url); 
  let slides = presentation.getSlides();

  // startIndex番からendIndex番までのスライドをシャッフルする。
  // ここのインデックスはGoogleスライドに表示されている番号と同じ。
  let startIndex = 2;
  let endIndex = slides.length;

  if(startIndex >= endIndex){
    console.error('インデックスを適切に入力してください。');
    return;
  }
  
  FisherYatesShuffle(slides, startIndex-1, endIndex-1);
}

/**
 * implement randomization algorithm.
 * referred : https://programming-place.net/ppp/contents/algorithm/other/002.html
 * @param {int} start - the zero-based slide index
 * @param {int} end - the zero-based slide intex
 */
function FisherYatesShuffle(slides, start, end){
  for(let i=end+1; i>start+1; --i){
    a = i-1;
    b = Math.floor(Math.random() * (i-start))+start; // start~i
    SwapSlides(slides, a, b);
  }
}

function SwapSlides(slides, a, b){
  min = Math.min(a, b);
  max = Math.max(a, b);

  slides[max].move(min+1);
  slides[min].move(max+1); // スライドのmoveはmove前の時点、moveするスライド自身も含んだindexを渡す必要がある。
}