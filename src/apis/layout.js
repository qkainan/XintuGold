import httpInstance from '@/utils/http.js'


export function getItemAPI() {
  return httpInstance({
    url:'/getGoldQuote',
  });


}