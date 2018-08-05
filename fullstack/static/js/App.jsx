import React from 'react';


var renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => {
  return '<a target="_blank" href="'+ href +'" title="' + title + '">' + text + '</a>';
}

class MarkdownPreviewer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: '# Markdown Previewer\n## A previewer for markdown\nType in markdown, and see the resulting HTML displayed.\nYou can type in:\n* [links](https://example.com)\n* headers (seen above)\n* __bolded text__\n* `inline code`\n\n```\n blocks \n     of \n  code      (which appears how you type it)\n```\n> blockquotes\n> (which can appear over multiple lines like this)\n\n ![200x200 placeholder image](https://via.placeholder.com/200x200 "Images as well!")'
    };
  }
  
  handleChange = (e) => {
    this.setState({markdown: e.target.value})
  }
  
  render(){
    return(
      <div className="container-fluid">
        <div id="content" className="row">
          <div className="col-lg-5 col-6">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div
            className="col-6 offset-lg-1"
            id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {renderer: renderer})}}></div>
        </div>
      </div>
    )
  }
}

export default class App extends React.Component{
  render(){
    return (
      <MarkdownPreviewer />
    )
  }
}
