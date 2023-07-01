/* eslint-disable no-undef */
class Button {
  get addButton() {
    return $('[data-testid] button');
  }
  get confirmEditButton() {
    return $('[data-testid="admin-trainers-confirm-button"]');
  }

  get confirmModalSuccesButton() {
    return $('[data-testid="admin-trainers-modal-alert"] button');
  }

  get confirmDeleteButton() {
    return $('[data-testid="modal-confirm"] button');
  }

  get newconfirmDeleteButton() {
    return $('[data-testid="admin-trainers-modal-alert"] button');
  }

  get submitMemberButton(){
    return $('[data-testid="member-signup-submit-button"]');
  }

  get cancelMemberButton(){
    return $('[data-testid="member-signup-cancel-button"]');
  }

  async addButtonClick() {
    await this.addButton.click();
  }

  async confirmEditButtonClick() {
    await this.confirmEditButton.click();
  }

  async confirmModalSuccesButtonClick() {
    await this.confirmModalSuccesButton.click();
  }

  async confirmDeleteButtonClick() {
    await this.confirmDeleteButton.click();
  }

  async newconfirmDeleteButtonClick() {
    await this.newconfirmDeleteButton.click();
  }

  async submitMemberButtonClick() {
    await this.submitMemberButton.click();
  }

  async cancelMemberButtonClick(){
    await this.cancelMemberButton.click();
  }
}

module.exports = new Button();
