import * as React from 'react'

interface Props {}
interface State {
  quote: string
  author: string
}
interface quote {
  quote: string
  author: string
  category: string
}
export default class Editor extends React.Component<Props, State> {
  private quotes: quote[]
  private bgColor: string
  constructor(props: Props) {
    super(props)
    this.quotes = [
      {
        quote: 'You can avoid reality, but you cannot avoid the consequences of avoiding reality.',
        author: 'Ayn Rand',
        category: 'Famous',
      },
      {
        quote:
          'I can write better than anybody who can write faster, and I can write faster than anybody who can write better.',
        author: 'A. J. Liebling',
        category: 'Famous',
      },
      {
        quote: 'This book fills a much-needed gap.',
        author: 'Moses Hadas in a review',
        category: 'Famous',
      },
      {
        quote: 'A mathematician is a device for turning coffee into theorems.',
        author: 'Paul Erdos',
        category: 'Famous',
      },
      {
        quote: "The only difference between me and a madman is that I'm not mad.",
        author: 'Salvador Dali',
        category: 'Famous',
      },
      {
        quote: 'Never interrupt your enemy when he is making a mistake.',
        author: 'Napoleon Bonaparte',
        category: 'Famous',
      },
      {
        quote: 'If you are going through hell, keep going.',
        author: 'Sir Winston Churchill ',
        category: 'Famous',
      },
      {
        quote: "He who has a 'why' to live, can bear with almost any 'how'.",
        author: 'Friedrich Nietzsche',
        category: 'Famous',
      },
      {
        quote:
          "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
        author: 'Frank Lloyd Wright',
        category: 'Famous',
      },
      {
        quote:
          'I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.',
        author: 'Sir Winston Churchill',
        category: 'Famous',
      },
    ]

    const random = this.quotes[parseInt(Math.floor(Math.random() * this.quotes.length).toFixed(0))]
    this.state = {
      quote: random.quote,
      author: random.author,
    }
    this.bgColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`
    this.newQuote = this.newQuote.bind(this)
  }

  newQuote() {
    const random = this.quotes[parseInt(Math.floor(Math.random() * this.quotes.length).toFixed(0))]
    this.bgColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)})`
    this.setState({
      quote: random.quote,
      author: random.author,
    })
  }

  componentDidUpdate() {
    document.body.style.backgroundColor = this.bgColor
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.bgColor
  }

  render() {
    const bg = { background: this.bgColor }
    console.log(bg)
    return (
      <div className="row justify-content-center align-items-center" id="quote-box">
        <div className="col-12 col-md-8 col-xl-6 bg-white p-4" style={{ color: this.bgColor }}>
          <div className="row">
            <div className="col-12 p-5" id="text" style={{ fontSize: 20 }}>
              {this.state.quote}
            </div>
            <div className="col-12  my-2" id="author">
              <span className="float-right">-{this.state.author}</span>
            </div>
            <div className="col-12 my-2">
              <a
                className="btn float-left text-white"
                rel="noopener noreferrer"
                id="tweet-quote"
                target="_blank"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${this.state.quote}"`}
                onClick={this.newQuote}
                style={bg}>
                t
              </a>
              <button
                className="btn float-right text-white"
                id="new-quote"
                onClick={this.newQuote}
                style={bg}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
