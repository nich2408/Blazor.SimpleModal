export function displayModal(id) {
    let modalElement = document.getElementById(id);
    let modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstance.show();
}

export function initializeModalEvents(id, modalEventsJsHelperRef) {
    // https://getbootstrap.com/docs/5.1/components/modal/#events
    let modalElement = document.getElementById(id);
    modalElement.addEventListener('hidden.bs.modal', function (e) {
        console.log(e);
        // Invokes the method stored in dotnet runtime.
        modalEventsJsHelperRef.invokeMethodAsync('ModalClosedAsync')
            .then(() => {
                console.log("[interop] Invoked ModalClosedAsync");
            });
    });
}