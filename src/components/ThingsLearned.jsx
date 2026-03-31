function ThingsLearned() {
  return (
    <section>
      <h1>Things I've Learned</h1>

      <h2>Internet Basics</h2>
      <ol>
        <li>HTTP Requests</li>
        <li>IP Address</li>
        <li>Servers</li>
      </ol>

      <h2>HTML</h2>
      <ul>
        <li>Stands for <strong>Hyper Text Markup Language</strong></li>
        <li>Lots of Tags
          <ul>
            <li>Boilerplate
              <ol>
                <li>Doctype</li>
                <li>HTML</li>
                <li>Head
                  <ol><li>Title</li></ol>
                </li>
                <li>Body</li>
              </ol>
            </li>
            <li>Headings</li>
            <li>Paragraph</li>
            <li><em>em</em></li>
            <li><strong>strong</strong></li>
          </ul>
        </li>
      </ul>

      <h2>Nested Lists</h2>
      <ul>
        <li>A</li>
        <li>B
          <ol>
            <li>B1</li>
            <li>B2
              <ul>
                <li>B2a
                  <ul>
                    <li>B2aa</li>
                    <li>B2ab</li>
                  </ul>
                </li>
                <li>B2b</li>
                <li>B2c</li>
              </ul>
            </li>
            <li>B3
              <ol>
                <li>B31</li>
                <li>B32</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>C</li>
      </ul>
    </section>
  );
}

export default ThingsLearned;