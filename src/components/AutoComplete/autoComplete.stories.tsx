import { queries } from "@testing-library/react";
import React from "react";
import { AutoComplete, DataSourceType } from "./autoComplete";

// interface GithubUserProps {
//     login: string
//     url: string
//     avatar_url: string
// }
// interface lakerPlayerProps {
//     value: string
//     number: number
// }
// const SimpleComplete = () => {
//   const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
//   'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
//   const lakersWithNumber = [
//     { value: 'aa', number: 11 },
//     { value: 'bb', number: 22 },
//     { value: 'cc', number: 33 },
//   ]
// //   const handleFetch = (query: string) => {
// //     return laker.filter(name => name.includes(query)).map(name => ({ value: name }))
// //   }
// //   const handleFetch = (query: string) => {
// //     return lakersWithNumber.filter(player => player.value.includes(query))
// //   }
//   const handleFetch = (query: string) => {
//     return fetch(`https://api.github.com/search/users?q=${query}`)
//       .then(res => res.json())
//       .then(({ items }) => {
//         console.log(items)
//         const formatItems = items.slice(0, 10).map(item => ({ value: item.login, ...item }))
//       }) 
//   }
// //   const renderOption = (item: DataSourceType<lakerPlayerProps>) => {
// //     return (
// //      <>
// //        <h2>Name: { item.value }</h2>
// //        <p>Number: { item.number }</p>
// //      </>
// //     )
// //   }
//   const renderOption = (item: DataSourceType<GithubUserProps>) => {
//     return (
//      <>
//        <h2>Name: { item.login }</h2>
//        <p>Number: { item.url }</p>
//      </>
//     )
//   }
//   return (
//     <AutoComplete
//       fetchSuggestions = { handleFetch }
//       onSelect = { action('seleceted')}
//       renderOption = { renderOption }
//     />
//   )
// }

// storiesOf('AutoComplete Component', module)
//   .add('AutoComplete', SimpleComplete)