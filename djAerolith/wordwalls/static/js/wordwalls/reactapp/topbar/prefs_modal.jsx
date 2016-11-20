import React from 'react';

import PrefsModalBody from './prefs_modal_body';

class PrefsModal extends React.Component {
  static styleToState(displayStyle) {
    return {
      tilesOn: displayStyle.tc.on,
      tileStyle: displayStyle.tc.selection,
      customTileOrder: displayStyle.tc.customOrder,
      blankCharacter: displayStyle.tc.blankCharacter,
      fontSans: displayStyle.tc.font === 'sans',
      showBorders: displayStyle.bc.showBorders,
      showChips: displayStyle.tc.showChips,
      showBold: displayStyle.tc.bold,
      hideLexiconSymbols: displayStyle.bc.hideLexiconSymbols,

      saveAllowed: true,
    };
  }

  constructor(props) {
    super(props);
    this.state = PrefsModal.styleToState(this.props.displayStyle);

    this.onOptionsModify = this.onOptionsModify.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.reset = this.reset.bind(this);
    this.allowSave = this.allowSave.bind(this);
  }

  /**
   * When an option in the modal changes, this function will get called,
   * which will update the state accordingly.
   */
  onOptionsModify(stateKey, value) {
    const newState = {};
    newState[stateKey] = value;
    this.setState(newState);
  }

  reset(displayStyle) {
    this.setState(PrefsModal.styleToState(displayStyle));
  }

  /**
   * Call the save function in this.props to persist the state to the
   * backend. Note that instead of reading DOM elements we're just
   * persisting the state itself, which should track all of the changes.
   */
  saveChanges() {
    this.props.onSave({
      tc: {
        on: this.state.tilesOn,
        selection: this.state.tileStyle,
        bold: this.state.showBold,
        customOrder: this.state.customTileOrder,
        blankCharacter: this.state.blankCharacter,
        font: this.state.fontSans ? 'sans' : 'mono',
        showChips: this.state.showChips,
      },
      bc: {
        showBorders: this.state.showBorders,
        hideLexiconSymbols: this.state.hideLexiconSymbols,
      },
    });
  }

  allowSave(allow) {
    this.setState({
      saveAllowed: allow,
    });
  }

  render() {
    let savebtnClass;
    savebtnClass = 'btn btn-primary';
    if (!this.state.saveAllowed) {
      savebtnClass += ' disabled';
    }

    return (
      <div
        className="modal fade prefs-modal"
        role="dialog"
        tabIndex="-1"
      >
        <div
          className="modal-dialog modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4
                className="modal-title"
              >Preferences</h4>
            </div>

            <PrefsModalBody
              // The displayStyle in the modal body will be initialized
              // with whatever the user originally has saved.
              // However, the PrefsModalBody will keep its own state
              // as to what is checked/selected. This seems easiest.
              onOptionsModify={this.onOptionsModify}
              tilesOn={this.state.tilesOn}
              tileStyle={this.state.tileStyle}
              customTileOrder={this.state.customTileOrder}
              blankCharacter={this.state.blankCharacter}
              fontSans={this.state.fontSans}
              showBorders={this.state.showBorders}
              showChips={this.state.showChips}
              showBold={this.state.showBold}
              hideLexiconSymbols={this.state.hideLexiconSymbols}
              allowSave={this.allowSave}
            />

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >Close</button>
              <button
                type="button"
                className={savebtnClass}
                onClick={this.saveChanges}
                data-dismiss="modal"
              >Save changes</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

PrefsModal.propTypes = {
  displayStyle: React.PropTypes.shape({
    tc: React.PropTypes.object,
    bc: React.PropTypes.object,
  }),
  onSave: React.PropTypes.func,
};

export default PrefsModal;