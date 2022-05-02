export const useTitle = (title?: string) => {
  console.log('useTitle')
  document.querySelector('title').innerHTML = title
    ? `${title} · PraditNET`
    : 'PraditNET'
}
