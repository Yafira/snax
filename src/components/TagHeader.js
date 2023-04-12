import styles from '../styles/TagHeader.module.css'

const TagHeader = ({ tag }) => (
	<div className={styles.TagHeader}>
		<h1>{tag}</h1>
	</div>
)

export default TagHeader
