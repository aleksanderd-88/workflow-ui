export const setPageTitle = (title: string) => {
  if ( typeof title === 'undefined' || !title )
    return console.warn(`Title is missing and is required for this route.`);
  
  if ( typeof title !== 'string' )
    return console.warn(`Wrong type! Type of "${ typeof title }" should be a "string"`);

  document.title = `Workflow - ${ title }`
}