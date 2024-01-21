import React, { useEffect, useState } from 'react'
import axios from 'axios';

function News() {

  const [data, setdata] = useState([])
  // 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=75d719aa4e8d44bdb1ac9a023fe5391d'

  useEffect(() => {

    const news = async () => {
      const responce = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-21&sortBy=publishedAt&apiKey=d2508e6e3ad74de497a47b265ba6da0d')
      const data = await responce.json()
      setdata(data.articles)
    }

    news()

  }, [])

  return (
    <div className="container">
      <h1 style={{ margin: "30px" }}>News Api</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {
          data.map((val) => {
            return (
              <div class="card" style={{ margin: "15px" }}>
                <div class="card__corner"></div>
                <div class="card__img">
                  <span class="card__span">
                    <img src={val.urlToImage ? val.urlToImage : "https://cleantechnica.com/wp-content/uploads/2023/04/CATL-500-wh-kg-battery-1.jpg"} alt="" style={{ height: "150px", objectFit: "contain" }} />
                  </span>
                </div>
                <div class="card-int">
                  <p class="card-int__title">{val.title ? val.title.slice(1, 15) : "ill Meta Have"}</p>
                  <p class="excerpt">{val.content ? val.content.slice(1, 110) : "hina is making automakers around the world nervous. Its domestic carmakershelped by generous state subsidiesa"}</p>

                  <a href={val.url} target='_blank'><button class="card-int__button"> Show</button></a>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default News
