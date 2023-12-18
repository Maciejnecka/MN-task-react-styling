import styled from 'styled-components';

const StyledDropdown = styled.div`
    position: relative;
    display: flex;

    select {
        width: 100%;
        height: 45px;
        border: 3px solid transparent;
        padding: 0;
        outline: none;
        border-radius: 6px;
        text-align: center;
        letter-spacing: 1px;
        color: var(--color-font-black);
        font-size: 16px;
        box-shadow: var(--input-box-shadow);
        transition: var(--transition);

        &:focus {
            border: 3px solid var(--color-neon-green);
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
                inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4),
                0 0 10px rgba(57, 255, 20, 0.5);
        }

        &:valid,
        &:focus {
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4),
                inset 3px 3px 10px rgba(0, 0, 0, 1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
        }
    }

    .dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: #fff;
        border: 3px solid transparent;
        border-radius: 6px;
        box-shadow: var(--input-box-shadow);
        z-index: 1;
        transition: var(--transition);

        li {
            padding: 8px;
            cursor: pointer;

            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`;

export default StyledDropdown;
