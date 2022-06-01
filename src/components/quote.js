function Quote() {
  const quote = 'Mathematics is not about numbers, equations, computations or alogorithms: It is about understanding. ';
  return (
    <div className="quote">
      <blockquote>
        {quote}
        <span><i>-William Paul Thurston</i></span>
      </blockquote>
    </div>
  );
}

export default Quote;
