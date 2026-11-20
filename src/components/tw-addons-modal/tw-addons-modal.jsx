import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/modal.jsx';

import styles from './addons-modal.css';

const AddonsModal = ({addonId, onClose}) => {
    const path = process.env.ROUTING_STYLE === 'wildcard' ? 'addons' : 'addons.html';
    const hash = typeof addonId === 'string' ? `#${encodeURIComponent(addonId)}` : '';
    const src = `${process.env.ROOT}${path}${hash}`;

    return (
        <Modal
            className={styles.modalContent}
            contentLabel="Addons"
            headerClassName={styles.modalHeader}
            id="addons"
            onRequestClose={onClose}
        >
            <div className={styles.content}>
                <iframe
                    src={src}
                    title="Addon settings"
                />
            </div>
        </Modal>
    );
};

AddonsModal.propTypes = {
    addonId: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

export default AddonsModal;
