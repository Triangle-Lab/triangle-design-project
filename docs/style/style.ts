const styles = `
  .dumi-default-logo{
    font-weight: 700 !important;
    font-family: 'Microsoft Yahei';
  }
  .dumi-default-navbar{
    margin-left: 5rem !important;
    font-weight: 700 !important;
  }
  .dumi-default-navbar .active{
    font-weight: 700 !important;
  }

  @media screen and (max-width: 768px) {
    .dumi-default-navbar{
      margin-left: 0 !important;
    }
  }

  ::-webkit-scrollbar {
    width: 3px !important;
    height: 3px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #057eff;
    border-radius: 20px;
    transition: all 1s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #057eff;
  }

  ::-webkit-scrollbar-corner {
    display: block;
  }

  .dumi-default-search-bar-input{
    border-radius: 5px !important;
  }

  .dumi-default-content:not([data-no-sidebar]){
    box-shadow:none !important;
    border:3px solid #057eff !important;
  }

  .dumi-default-sidebar{
    margin-right: .1rem !important;
  }

  .dumi-default-sidebar-group{
    font-weight: 700 !important;
  }

  .dumi-default-sidebar-group .active{
    font-weight: 700 !important;
  }

  .dumi-default-hero-title > span{
    color: #057eff !important;
    text-shadow: none !important;
    background: none !important;
    -webkit-background-clip: none !important;
    background-clip: none !important;
    font-family: 'Ubuntu', sans-serif !important;
    font-size: 10rem !important;
  }

  .dumi-default-hero-actions a{
    border-radius: 10px !important;
  }

  .markdown h1{
    color: #057eff !important;
  }
`

export default styles
