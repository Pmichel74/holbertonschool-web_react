var Subjects;
(function (Subjects) {
    var Subject = (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Subject.js.map