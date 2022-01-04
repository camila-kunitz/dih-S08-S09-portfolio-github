import PropTypes from 'prop-types';

const Repositorio = ({ titulo, descricao, destacar }) => {
  return (
    <article>
      <h3>{titulo}</h3>
      <span>projeto em destaque!!</span>
      <p>{descricao}</p>
    </article>
  )
}

Repositorio.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  destacar: PropTypes.bool
};

export default Repositorio;