export const setPageTitle = (title: string) => {
  if ( typeof title !== 'string' )
    return console.warn(`Wrong type! Type of "${ typeof title }" should be a "string"`);
  document.title = `Workflow - ${ title }`
}